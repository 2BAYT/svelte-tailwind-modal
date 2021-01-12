/** Dispatch event when escape pressed */
export function escapeKeyPress(node) {

    const handleEscape = event => {
        if (event.key == "Escape") {
            node.dispatchEvent(
                new CustomEvent('escapeKeyPress', node)
            )
        }
        
    }
    
    document.addEventListener('keyup', handleEscape, true);
    
    return {
            destroy() {
                document.removeEventListener('keyup', handleEscape, true);
            }
        }
}