<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/assets/images/svelte-logo.svg';
</script>

<header>
<nav>
    <div class='container mx-auto px-4'>
        <div class='flex h-24 items-center'>
            <a class='inline-block' href="/static">
                <img
                        class='h-5'
                        src={logo}
                        alt=''
                />
            </a>
            <button class='lg:hidden navbar-burger py-1 ml-auto'>
                <svg
                        width={44}
                        height={16}
                        viewBox='0 0 44 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                >
                    <rect width={44} height={2} rx={1} fill='black' />
                    <rect y={14} width={44} height={2} rx={1} fill='black' />
                </svg>
            </button>
            <div class='hidden lg:flex ml-auto mr-12 items-center'>
                <a class='inline-block hover:underline mr-10' aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/static">
                    About
                </a>
                <a class='inline-block hover:underline mr-10' aria-current={$page.url.pathname === '/' ? 'page' : undefined} href="/static">
                    Services
                </a>
                <a class='inline-block hover:underline mr-10' href="/static">
                    Projects
                </a>
                <a class='inline-block hover:underline' href='#/'>
                    Contact us
                </a>
            </div>
            <a
                    class='group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200'
                    href="/static"
            >
                <span class='mr-2'>Get consulation</span>
                <span class='group-hover:rotate-45 transform transition duration-100'>
                    <svg
                            width={10}
                            height={10}
                            viewBox='0 0 10 10'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                              d='M9 1L1 9'
                              stroke='currentColor'
                              strokeWidth='1.3'
                              strokeMiterlimit={10}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                      />
                      <path
                              d='M9 8.33571V1H1.66429'
                              stroke='currentColor'
                              strokeWidth='1.3'
                              strokeMiterlimit={10}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                      />
                    </svg>
                  </span>
            </a>
        </div>
    </div>
</nav>
</header>

<style>

</style>