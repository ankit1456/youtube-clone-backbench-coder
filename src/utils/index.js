export function formatNumber(number) {
    if(!number) return
    return new Intl.NumberFormat("en", {
        notation: "compact",
        compactDisplay: "short",
    }).format(number);
}
