<template>
  <section class="flex items-center h-screen bg-gray-100 font-poppins dark:bg-gray-800">
    <div class="justify-center flex-1 py-4 lg:py-10">
      <div
        class="relative bg-center bg-no-repeat bg-cover"
        style="
          min-height: 400px;
          background-image: url('https://i.postimg.cc/fyMntRwp/pexels-taryn-elliott-4112358.jpg');
        "
      >
        <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center bg-gray-900/75">
          <div class="max-w-3xl mx-auto text-center">
            <a class="inline-block text-gray-100" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="w-10 h-10 bi bi-envelope"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                />
              </svg>
            </a>
            <h2
              class="my-6 text-2xl font-bold tracking-wide text-gray-100 dark:text-gray-300 md:text-5xl"
            >
              Newsletter
            </h2>
            <p class="mb-8 text-base font-medium text-gray-300 dark:text-gray-400 md:text-lg">
              Lorem ipsum dor amet set ispisucs ipsum amet dor lorem isodispus Lorem ipsum dor amet
              set ispisucs ipsum amet dor lorem isodispus
            </p>
            <div class="flex flex-wrap justify-center px-4">
              <input
                class="w-full px-4 py-4 mb-4 text-sm text-gray-900 placeholder-gray-400 rounded lg:mr-3 dark:text-gray-700 dark:bg-gray-100 md:mb-0 md:w-1/2"
                type="text"
                placeholder="Type your e-mail"
              />
              <button
                class="w-full px-6 py-4 text-sm font-semibold text-gray-100 bg-blue-500 rounded md:w-auto md:ml-2 hover:bg-blue-600"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style></style>
