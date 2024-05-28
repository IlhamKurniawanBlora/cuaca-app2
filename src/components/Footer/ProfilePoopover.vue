<template>
<button class="btn-36 border-slate-900 bg-slate-300 dark:bg-slate-800 text-slate-900 dark:text-slate-200" data-popover-target="popover-user-profile">
  <span class="baru"> KAIRAV </span>
  <div class="old">
    <span class="bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-slate-200">Ilhamk</span>
    <span aria-hidden class="bg-slate-300 dark:bg-slate-600 text-slate-800 dark:text-slate-200">Ilhamk</span>
  </div>
</button>
<div data-popover id="popover-user-profile" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
    <div class="p-3">
        <div class="flex items-center justify-between mb-2">
            <a href="#">
                <img class="w-10 h-10 rounded-full" src="img/profile-blck.png" alt="Jese Leos">
            </a>
            <div>
                <a
      href="https://www.instagram.com/ilhamkrnwan__/"
      target="_blank"
      class="flex items-center justify-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      <i class="fab fa-instagram mr-2"></i>
      Follow
    </a>
            </div>
        </div>
        <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="https://www.instagram.com/ilhamkrnwan__/" target="_blank" >Kairav</a>
        </p>
        <p class="mb-3 text-sm font-normal">
            <a href="https://www.instagram.com/ilhamkrnwan__/" target="_blank"  class="hover:underline">@ilhamkrnwan__</a>
        </p>
        <p class="mb-4 text-sm">Hello World. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ducimus atque exercitationem!<a href="https://www.instagram.com/ilhamkrnwan__/" target="_blank"  class="text-blue-600 dark:text-blue-500 hover:underline ml-2">blora</a>.</p>
        <ul class="flex text-sm">
            <li class="me-2">
                <a href="https://www.instagram.com/ilhamkrnwan__/" target="_blank"  class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white mr-2">599</span>
                    <span>Following</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/ilhamkrnwan__/" target="_blank"  class="hover:underline">
                    <span class="font-semibold text-gray-900 dark:text-white mr-2">589</span>
                    <span>Followers</span>
                </a>
            </li>
        </ul>
    </div>
    <div data-popper-arrow></div>
</div>
</template>
<script>

</script>

<style  scoped>
.btn-36,
.btn-36 *,
.btn-36 :after,
.btn-36 :before,
.btn-36:after,
.btn-36:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-36 {
  -webkit-tap-highlight-color: 
transparent;
  -webkit-appearance: button;
  background-image: none;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
}
.btn-36:disabled {
  cursor: default;
}
.btn-36:-moz-focusring {
  outline: auto;
}
.btn-36 svg {
  display: block;
  vertical-align: middle;
}
.btn-36 [hidden] {
  display: none;
}
.btn-36 {
  border: 1px solid;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 1.1rem 4rem;
  position: relative;
  text-transform: uppercase;
}
.btn-36 .baru,
.btn-36 .old span {
  font-weight: 900;
  transition: transform 0.2s;
}
.btn-36 .baru {
  display: block;
  transform: scale(0);
}
.btn-36:hover .baru {
  transform: scale(1);
}
.btn-36 .old,
.btn-36 .old span {
  inset: 0;
  position: absolute;
}
.btn-36 .old span {
  display: block;
  display: grid;
  place-items: center;
}
.btn-36 .old span:first-child {
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}
.btn-36 .old span:nth-child(2) {
  -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
}
.btn-36:hover .old span:first-child {
  transform: translateY(-50%);
}
.btn-36:hover .old span:nth-child(2) {
  transform: translateY(50%);
}
</style>