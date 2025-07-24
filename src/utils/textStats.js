export function getStats ( html ) {
    // Strip HTML tags for plain text calculation
    const plain = html.replace( /<[^>]+>/g, ' ' ).replace( /\s+/g, ' ' ).trim();
    const words = plain.length ? plain.split( " " ).length : 0;
    const chars = plain.length;
    const lines = plain.split( '\n' ).length;

    return { words, chars, lines };
}

