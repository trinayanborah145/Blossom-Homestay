# Backup current files
$backupDir = "backup"
$projectDir = "project"

# Create backup of current files
Write-Host "Creating backup in $backupDir..."
if (Test-Path $backupDir) {
    Remove-Item -Recurse -Force $backupDir
}
New-Item -ItemType Directory -Path $backupDir | Out-Null

# Copy all files to backup except node_modules and .git
Get-ChildItem -Path . -Exclude @('node_modules', '.git', $backupDir, 'project') | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination (Join-Path $backupDir $_.Name) -Recurse -Force
}

# Move project files to root
Write-Host "Moving project files to root..."
Get-ChildItem -Path $projectDir | ForEach-Object {
    $destination = $_.Name
    if (Test-Path $destination) {
        Remove-Item -Path $destination -Recurse -Force
    }
    Move-Item -Path $_.FullName -Destination . -Force
}

# Clean up
Remove-Item -Path $projectDir -Recurse -Force

Write-Host "Project files have been moved to the root directory. A backup is available in the 'backup' folder."
