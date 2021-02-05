<script>
	import { clickOutside } from '../src/clickOutside'
	import { escapeKeyPress } from '../src/escapeKeyPress'

    let visible = false;
    export let full = false;

    export let outSideClick = null;
    export let autoBottomForMobile = false;
    export let safePaddingBottom = false;

    export function show(){
        visible = true;
    }

    export function isVisible(){
       return visible;
    }

    export function hide(){
        visible = false;
    }

    function closeClicked(){
        if(outSideClick){
            outSideClick();
        }else{
            visible = false;
        }
    }
</script>

{#if visible}
<div class="z-40 fixed {autoBottomForMobile ? 'bottom-0' : 'inset-0'} sm:inset-0  flex items-center justify-center">
    <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div use:clickOutside use:escapeKeyPress  on:escapeKeyPress={closeClicked} on:clickOutside={closeClicked} class="{autoBottomForMobile ? 'bg-white sm:rounded-md' :''} {safePaddingBottom ?  'safe-padding-bottom':''} {full ? 'flex h-full w-full' :''} transform transition-all " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
        <div class="{full ? 'flex h-full w-full' :''}">
            <slot></slot>
        </div>
    </div>
</div>
{/if}

