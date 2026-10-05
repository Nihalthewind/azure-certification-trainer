# Compatible with Windows PowerShell 5.1.
[CmdletBinding()]
param (
    [Parameter(Mandatory = $true)]
    [ValidateNotNullOrEmpty()]
    [string]$Message
)

$ErrorActionPreference = 'Stop'

if ([string]::IsNullOrWhiteSpace($Message)) {
    throw 'Message must not be blank.'
}

Push-Location (Split-Path -Parent $PSScriptRoot)
try {
    $branch = & git branch --show-current
    if ($LASTEXITCODE -ne 0) { throw 'Cannot determine the Git branch.' }
    if ($branch -ne 'storybook') { throw 'Shipping is only allowed on branch storybook.' }

    # Use npm.cmd to avoid PowerShell execution-policy restrictions on npm.ps1.
    & npm.cmd run validate
    if ($LASTEXITCODE -ne 0) { throw 'Validation failed. Shipping stopped.' }

    & git add -A
    if ($LASTEXITCODE -ne 0) { throw 'git add failed.' }

    & git diff --cached --quiet --exit-code
    $diffExitCode = $LASTEXITCODE
    if ($diffExitCode -eq 0) {
        Write-Host 'No changes to commit.'
        return
    }
    if ($diffExitCode -ne 1) { throw 'Cannot inspect staged changes.' }

    & git commit -m "$Message"
    if ($LASTEXITCODE -ne 0) { throw 'git commit failed.' }

    $commitHash = & git rev-parse HEAD
    if ($LASTEXITCODE -ne 0) { throw 'Cannot determine the commit hash.' }

    & git push origin storybook
    if ($LASTEXITCODE -ne 0) { throw 'git push failed.' }

    Write-Host "Pushed commit: $commitHash"
}
finally {
    Pop-Location
}
