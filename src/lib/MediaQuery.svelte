<script context="module" lang="ts">
	import type { Action } from 'svelte/action';
	import type { Writable } from 'svelte/store';
	import type { RequestEvent } from '@sveltejs/kit';

	export const COOKIE_NAME = 'sk_is_mobile';
  /**
   * set cookie is mobile
   * @param event hooks.server.js handle({ event })
   * @param mobiles mobile user agents
   */
  export const setCookieIsMobile = (
    event: RequestEvent,
    mobiles = ['Mobile', 'Android', 'iPhone', 'iPad'] as const
  ) => {
    const {
      request: { headers },
      cookies
    } = event;
    const user_agent = headers.get('user-agent');
    const is_mobile = mobiles.some((mobile) => user_agent?.includes(mobile));
    const sk_is_mobile = cookies.get(COOKIE_NAME);
    if (sk_is_mobile === undefined) {
      cookies.set(COOKIE_NAME, `${is_mobile}`, {
        path: '/'
      });
    }
  };
  export const mediaQuery: Action<Window, Writable<boolean>> = (window, store) => {
    const mediaQueryList = window.matchMedia('(min-width: 768px)');
    const handler = (event: {
      matches: boolean;
    }) => {
      const { matches } = event;
      const is_mobile = !matches
      store.set(is_mobile)
      fetch('/api/sk_is_mobile', {
        method: 'POST',
        body: JSON.stringify({
          sk_is_mobile: is_mobile.toString()
        })
      })
    }

    mediaQueryList.addEventListener('change', handler);
    if(window.innerWidth) handler(mediaQueryList)
    return {
      destroy() {
        mediaQueryList.removeEventListener('change', handler);
      }
    }
  }
</script>
<script lang="ts" strictEvents>
  import {getContext} from 'svelte';
  const is_mobile = getContext<Writable<boolean>>('is_mobile');
</script>
{#if $$slots.mobile && $is_mobile}
  <slot name="mobile" />
{/if}
{#if $$slots.laptop && !$is_mobile}
  <slot name="laptop" />
{/if}
