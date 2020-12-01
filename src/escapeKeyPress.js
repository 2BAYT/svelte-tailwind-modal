/** Dispatch event on click outside of node */
export function escapeKeyPress(node) {

    const handleClick = event => {
        if (event.key == "Escape") {
            node.dispatchEvent(
                new CustomEvent('escapeKeyPress', node)
            )
        }
        
    }
    
    document.addEventListener('keypress', handleClick, true);
    
    return {
            destroy() {
                document.removeEventListener('keypress', handleClick, true);
            }
        }
}