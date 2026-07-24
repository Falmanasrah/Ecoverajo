$htmlFiles = @(
    "index.html",
    "accessibility-statement-ar.html",
    "accessibility-statement.html",
    "cookie-policy-ar.html",
    "cookie-policy.html",
    "intellectual-property-ar.html",
    "intellectual-property.html",
    "privacy-policy-ar.html",
    "privacy-policy.html",
    "product-disclaimer-ar.html",
    "product-disclaimer.html",
    "terms-and-conditions-ar.html",
    "terms-and-conditions.html",
    "splash.html"
)

$versionHtml = "`n<div style=`"position: fixed; bottom: 10px; left: 10px; font-size: 12px; opacity: 0.5; z-index: 9999; pointer-events: none; mix-blend-mode: difference; color: white;`">Version v.2</div>`n"

foreach ($file in $htmlFiles) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        
        # Check if it already has the version string so we don't duplicate
        if ($content -notmatch "Version v\.2") {
            if ($content -match "</body>") {
                $content = $content -replace "(?i)</body>", "$versionHtml</body>"
            } else {
                $content += $versionHtml
            }
            Set-Content $file -Value $content -Encoding UTF8
            Write-Host "Updated $file"
        } else {
            Write-Host "Skipped $file (already has version)"
        }
    } else {
        Write-Host "File not found: $file"
    }
}
