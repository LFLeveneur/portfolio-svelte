<script>
import spinBonus from '$images/hero/arrow-spin/spin-bonus.svg'
import arrowSpin from '$images/hero/arrow-spin/arrow-spin.svg'
</script>

<section class='relative overflow-hidden'>
  <div class='container mx-auto px-4'>
    <div class='relative mx-auto mb-12 pt-12 pb-64 xs:pb-40 lg:pb-12 border-b'>
      <h1 class='font-heading text-6xl sm:text-9xl md:text-10xl xl:text-13xl tracking-tightest'>
        We create modern architecture
      </h1>
      <div class='absolute bottom-0 right-0 mb-10 max-w-sm ml-auto text-right'>
        <span class='block mb-1 text-xs'>Since</span>
        <span class='block mb-3 text-xs'>1979</span>
        <p>
                  <span class='block'>
                    Duoloco® is a strategic branding agency
                  </span>
          <span class='block'>
                    focused on brand creation, rebrands, and brand
                  </span>
          <span class='block'>
                    transformation for progressive companies.
                  </span>
        </p>
      </div>
    </div>
    <div class='flex flex-wrap -mx-3 align-items-end'>
      <div class='w-full md:w-6/12 lg:w-7/12 px-3 relative'>
        <div class='absolute top-0 right-0 w-44 h-44 mt-4 mr-5 flex items-center justify-center'>
          <img
            class='absolute top-0 left-0 animate-spinSlow'
            style={{ animationDirection: 'reverse' }}
            src={spinBonus}
            alt=''
          />
          <img
            class='relative'
            src={arrowSpin}
            alt=''
          />
        </div>
        <img
          class='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
          src='https://images.unsplash.com/photo-1690320276492-08823be529d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
          alt=''
        />
      </div>
      <div class='hidden md:block md:w-6/12 lg:w-5/12 px-3'>
        <div class='flex flex-wrap -mx-3'>
          <div class='w-5/12 px-3'>
            <img
              class='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
              src='https://images.unsplash.com/photo-1690320276492-08823be529d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
              alt=''
            />
          </div>
          <div class='w-7/12 px-3'>
            <img
              class='block w-full h-64 lg:h-80 rounded-t-4xl object-cover'
              src='https://images.unsplash.com/photo-1690320276492-08823be529d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50'>
    <div class='navbar-backdrop fixed inset-0 bg-gray-800 opacity-50' />
    <nav class='relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto'>
      <div class='flex mb-auto items-center'>
        <a class='inline-block mr-auto' href='#'>
          <img
            class='h-4'
            src='asitrastudio-assets/logos/logo-asi.svg'
            alt=''
          />
        </a>
        <a class='navbar-close' href='#'>
          <svg
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 18L18 6M6 6L18 18'
              stroke='#111827'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>
      <div class='py-12 mb-auto'>
        <ul class='flex-col'>
          <li class='mb-6'>
            <a class='inline-block text-black' href='#'>
              About
            </a>
          </li>
          <li class='mb-6'>
            <a class='inline-block text-black' href='#'>
              Services
            </a>
          </li>
          <li class='mb-6'>
            <a class='inline-block text-black' href='#'>
              Projects
            </a>
          </li>
          <li>
            <a class='inline-block text-black' href='#'>
              Contact us
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a
          class='block mb-3 px-4 py-4 text-center font-medium text-black hover:text-white border border-black hover:bg-black rounded-full transition duration-200'
          href='#'
        >
          Login
        </a>
        <a
          class='block px-4 py-4 text-center font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200'
          href='#'
        >
          Sign in
        </a>
      </div>
    </nav>
  </div>
</section>