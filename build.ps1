npm run clean
if ($?) {
    npx eleventy
} else {
    Write-Error "Failed to clean, build process stopped."
}