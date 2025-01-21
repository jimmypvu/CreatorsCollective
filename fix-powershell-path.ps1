# Run this script as Administrator
# Script to check and fix PowerShell and .NET environment paths

function Test-AdminPrivileges {
    $identity = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($identity)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

function Add-ToPath {
    param (
        [string]$PathToAdd
    )
    
    if (Test-Path $PathToAdd) {
        $currentPath = [Environment]::GetEnvironmentVariable('Path', 'Machine')
        if ($currentPath -notlike "*$PathToAdd*") {
            [Environment]::SetEnvironmentVariable(
                'Path',
                "$currentPath;$PathToAdd",
                'Machine'
            )
            Write-Host "Added $PathToAdd to PATH" -ForegroundColor Green
            return $true
        }
        else {
            Write-Host "$PathToAdd already in PATH" -ForegroundColor Yellow
            return $false
        }
    }
    else {
        Write-Host "Path $PathToAdd does not exist" -ForegroundColor Red
        return $false
    }
}

# Check if running as administrator
if (-not (Test-AdminPrivileges)) {
    Write-Host "Please run this script as Administrator" -ForegroundColor Red
    exit 1
}

Write-Host "Checking PowerShell and .NET installations..." -ForegroundColor Cyan

# Check PowerShell version
$psVersion = $PSVersionTable.PSVersion
Write-Host "PowerShell Version: $($psVersion.ToString())" -ForegroundColor Cyan

# Check .NET installations
Write-Host "`nInstalled .NET versions:" -ForegroundColor Cyan
dotnet --list-runtimes

# Common paths to check and add
$pathsToCheck = @(
    "${env:ProgramFiles}\PowerShell\7",
    "${env:ProgramFiles(x86)}\PowerShell\7",
    "${env:ProgramFiles}\dotnet",
    "${env:ProgramFiles(x86)}\dotnet"
)

Write-Host "`nChecking and adding necessary paths..." -ForegroundColor Cyan
$pathsAdded = $false

foreach ($path in $pathsToCheck) {
    if (Add-ToPath $path) {
        $pathsAdded = $true
    }
}

# Refresh environment variables in current session
if ($pathsAdded) {
    Write-Host "`nRefreshing environment variables..." -ForegroundColor Cyan
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
}

Write-Host "`nCurrent PATH variable:" -ForegroundColor Cyan
$env:Path -split ';' | Where-Object { $_ } | Sort-Object | ForEach-Object { Write-Host $_ }

Write-Host "`nScript completed. Please restart your terminal and VSCode for changes to take effect." -ForegroundColor Green
