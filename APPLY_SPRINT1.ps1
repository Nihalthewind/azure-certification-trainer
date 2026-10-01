param(
  [Parameter(Mandatory=$true)]
  [string]$ProjectPath
)

$ErrorActionPreference = 'Stop'
$ProjectPath = (Resolve-Path $ProjectPath).Path
$PatchRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$Payload = Join-Path $PatchRoot 'payload'

Write-Host "Azure Trainer - Sprint 1 / Button" -ForegroundColor Cyan
Write-Host "Projet : $ProjectPath"

Push-Location $ProjectPath
try {
  $branch = (git branch --show-current).Trim()
  if ($branch -ne 'storybook') {
    throw "Branche courante '$branch'. Le Sprint 1 doit etre applique sur la branche 'storybook'."
  }

  if (-not (Test-Path '.\src\ui\foundations\tokens.css')) {
    throw 'Sprint 0 non detecte : src/ui/foundations/tokens.css est absent.'
  }

  $backup = Join-Path $env:TEMP ("azure-trainer-sprint1-backup-" + (Get-Date -Format 'yyyyMMdd-HHmmss'))
  New-Item -ItemType Directory -Force -Path $backup | Out-Null

  $replace = @(
    '.storybook\main.js',
    'src\ui\components\button\button.js',
    'src\ui\components\button\button.css',
    'src\ui\components\button\README.md',
    'stories\components\Button.stories.js',
    'docs\SPRINT_1.md'
  )

  foreach ($relative in $replace) {
    $target = Join-Path $ProjectPath $relative
    if (Test-Path $target) {
      $backupTarget = Join-Path $backup $relative
      $backupDir = Split-Path -Parent $backupTarget
      New-Item -ItemType Directory -Force -Path $backupDir | Out-Null
      Copy-Item -Force $target $backupTarget
    }
  }

  Copy-Item -Path (Join-Path $Payload '*') -Destination $ProjectPath -Recurse -Force

  Write-Host "Sprint 1 applique. Sauvegarde : $backup" -ForegroundColor Green
  Write-Host 'Validation JavaScript...' -ForegroundColor Cyan
  node --check '.\src\ui\components\button\button.js'
  node --check '.\stories\components\Button.stories.js'

  Write-Host 'Validation Storybook...' -ForegroundColor Cyan
  npm run build-storybook

  Write-Host "`nGit status :" -ForegroundColor Cyan
  git status --short
}
finally {
  Pop-Location
}
