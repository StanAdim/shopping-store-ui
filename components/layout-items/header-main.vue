<script setup lang="ts">
import {useAuthStore} from "~/store/useAuthStore";

</script>
<template>
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6ecf4] px-10 py-3">
    <div class="flex items-center gap-8">
      <div class="flex items-center gap-4 text-[#0d131c]">
        <div class="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path></svg>
        </div>
        <h2 class="text-[#0d131c] text-lg font-bold leading-tight tracking-[-0.015em]">StyleHub</h2>
      </div>
      <div class="flex items-center gap-9">
        <a class="text-[#0d131c] text-sm font-medium leading-normal" href="#">New Arrivals</a>
        <a class="text-[#0d131c] text-sm font-medium leading-normal" href="#">Men</a>
        <a class="text-[#0d131c] text-sm font-medium leading-normal" href="#">Women</a>
        <a class="text-[#0d131c] text-sm font-medium leading-normal" href="#">Accessories</a>
        <a class="text-[#0d131c] text-sm font-medium leading-normal" href="#">Sale</a>
      </div>
    </div>
    <div class="flex flex-1 justify-end gap-8">
      <label class="flex flex-col min-w-40 !h-10 max-w-64">
        <div class="flex w-full flex-1 items-stretch rounded-xl h-full">
          <div
              class="text-[#47699e] flex border-none bg-[#e6ecf4] items-center justify-center pl-4 rounded-l-xl border-r-0"
              data-icon="MagnifyingGlass"
              data-size="24px"
              data-weight="regular"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                  d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
              ></path>
            </svg>
          </div>
          <input
              placeholder="Search"
              class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131c] focus:outline-0 focus:ring-0 border-none bg-[#e6ecf4] focus:border-none h-full placeholder:text-[#47699e] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value=""
          />
        </div>
      </label>
      <div class="flex gap-2">
        <button
            class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e6ecf4] text-[#0d131c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
        >
          <div class="text-[#0d131c]" data-icon="Heart" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path
                  d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"
              ></path>
            </svg>
          </div>
        </button>
        <button
            class="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e6ecf4] text-[#0d131c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
        >
          <div class="text-[#0d131c]" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path
                  d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div
          class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnF2Xx1y-fez3ao_mFiW8wk2ok7AORCRvkOM4V8pZeiFktBOHZY2FF8R_jOqDVlDzVIotHZBNRH4BV_PfI7WEkn2QLn3c1RFZ8ApinoelJgJSjA4vZZRGF3mWD2wApmCyC-6o4SGdIi3fuSb4J4Vm-NYqLUSrkyVXGykMEfeiCNsJBOWBZ9mXfx5IQVirdu3YJJBpLHYTvTp3b-tkp69E4h0ZwNb8rdtEEMJvVCC9akdB0tfQ353l72pl5K-AgATPM7km3cxPwH_8");'
      ></div>
    </div>
  </header>
</template>
