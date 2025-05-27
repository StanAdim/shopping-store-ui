<script setup lang="ts">
import {useGeneralStore} from "~/store/useGeneralStore";
import Product from "~/components/products/product.vue";

const genStore = useGeneralStore()

</script>

<template>
  <div class="flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[85%] flex-1">
      <div class="@container">
        <div class="@[480px]:p-4">
          <div
              class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
              style='background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCfoXbIYJwIlHTMcidzhvm8kMsCCD0N9fU7bvYxTB5pjewEzfQta8CNcvRyScJbbnY_VXMJ5W2VzKT75wz1yAlLq7ER2QiqcOwlxbKnEpzPg6ogvOfxnn9HK171ALIje6YJ81PFNQg-BvuQxzGlVcgzZMrtllatc14i26A3stsWBVbxbYHYBiZW8ZBF0c4osOJgTg8rRVykOJxh62T62oTv5vHtaMOQou1pG3sZT36QErXf8RtbSgkac0amrfgsRJTTtUlCm3xowuE");'
          >
            <div class="flex flex-col gap-2 text-left">
              <h1
                  class="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Elevate Your Style
              </h1>
              <h2 class="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                Discover the latest trends and timeless classics to express your unique personality.
              </h2>
            </div>
            <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#022359] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
            >
              <span class="truncate">Shop Now</span>
            </button>
          </div>
        </div>
      </div>
      <h2 class="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Products</h2>
      <div class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
        <div class="flex items-stretch p-4 gap-3">
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
                class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4_ujVYmG9CdukH4EEXKvMyoFbe3pJg8Cj_PU1tiviXIp_nbIinAWb3zlD7v13LknWRbRPa2J4shbHNymuC4vtDFhlbG4t6Tz7BtxKtVp5ean_l7OHqhB6tPjC63-6jFIBSLutYa08BTyPKKs4YI4kUWyb18_2oqK4GIMBE9TLzl_1ndJYCxlQugwv1xjClKNlh935KqAz22qVV1donJokcqfRzKcmgL1CpQzMZl9VAb8cxwXHyOHpx247Eih2a_s7-f3QadShHXw");'
            ></div>
            <p class="text-[#0d131c] text-base font-medium leading-normal">Women's Collection</p>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
                class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaM8OU574XwAyfLk-RJhtt3hTJWYc1zWME2yXyRCi9GzFjzTpagKqUnNI-IaCC0VjJYoG-9cQz5xB6OV-A_OuVaaAzevPSdeYOueX3Ex29Fk61UxaemeirKNQv9N3bNa4QLjlMqHa1BUN976bXvCLbH7Qy6lxNSqXV4IKY3p0weMUd-r-UoiN3TqTQXSJXm_R7PldU6_JBXIIPTP8cTN5W_QC1rKcwMiUKNk30wH9Wh6qYVpnSZ6li0WUHBOkKqVN4ki1kvOloGHI");'
            ></div>
            <p class="text-[#0d131c] text-base font-medium leading-normal">Men's Collection</p>
          </div>
          <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
            <div
                class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
                style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuARRVbz316oatzMfNx-gW_m2HNowQw6zF1Luf8fWjvcavQYgkDHfAekRkWk5zwIRRIq1qRmtwSMgRiH76mfRlw2WgPgGtLXTXcumCZPzOM4MMlgHbo6RirL9FJ3uqWs-NMM21cKxcZ7Ixq70F5Jh_qUABh2-8LRWHsmamqWKYYgWj1bq12R1x5s3yOsdGgqvLgVn0k19hKGXlnZigttoKqXRqs-iK8OCY8Q17zNKzsV4GuBUZ-l7uGCprCweL6YpTKe18D9Omnsw3k");'
            ></div>
            <p class="text-[#0d131c] text-base font-medium leading-normal">Accessories</p>
          </div>
        </div>
      </div>
      <h2 class="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Shop by Category</h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div class="flex flex-col gap-3 pb-3">
          <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuByO71yKAEExiIpecNcR_kVO2xoKFMuBh-fDxawqxRwrMWfNFRCsSlBWwhWYRPiSMUjVs-QnpFC_7R1lnPfNxRnZbic_fGcXykpmWFdSXlbNefE-WLVVCouSPFISzRKBYNz3ao3GO603O4P05rq314rcZcDxqZ3j2gfW7ZRGoed4lPQeci19DmGtmTEo224lnaguOzywQkzDse-gMCN6rP-ahjpQuxca0UIPofPMvah8XbKWQ--tbgRCkaTJDHAAULofCCZy8VmSOU");'
          ></div>
          <p class="text-[#0d131c] text-base font-medium leading-normal">Dresses</p>
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRuO-7pco4oLwFCAyKI6gcx5dWxV1u_mo6M7EffL9P9IeZjfORRWBUKFkKrQO-9TA-dvpuGvD2ipcb7LqbGWbVrOy39u93z1l4FN6PggAgPbZGLSw5NapAeJbc8QXvz9ULDzjxvR9Gye4OqmduOaTVS52EVpSkXEzedgI0jXgkX4E-iR_paRWvSV9dusQXFmCIkgghhGWLc68hlO4y9G9F4qvZUGvyWVCj3p8iRAb4CJS7qybC_thcUJcgjCTIypnI_EKfjiVsNr0");'
          ></div>
          <p class="text-[#0d131c] text-base font-medium leading-normal">Tops</p>
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAb6Ct5pjfOMr2Y3Epj46Hq-_h8u9m4ka5r9UOZdxmQbmsJzOWiq635Vipe-3LG1AYGR1kqR4EV0Sm6d1n8PXnGDAIBuPagZScLk4FqzzuxUgKAg3C_kLIzn4IU4Aebq0HNkXAm7A262wiv8JcW9OCgY28hNviKQsii0NxUw_9d7qOGflCrBhHymfkDF2Vph8U1wn9--kO8E5ilkdz2e2f7wvsbRRevf2WSIC0WlfbuJ4WphGkv8eEVOYi3JOv_d_kX6ajGJXDGPFU");'
          ></div>
          <p class="text-[#0d131c] text-base font-medium leading-normal">Bottoms</p>
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAp7jb-p797uCk-iPnh-D34iVYI2Py9HZ-HXfeLCjdrlUfHC2whHviHq3RMZcJ0KPNiB3f7Y31wbfm7onUIDKx-FMyEZ2jIk5Yba1JYLCI_DK5_t7K7OBNQZNJYjcsqO-0a-IACmse9kxmQ4rK5GqpJGHZCJ0_Vopbc7-yG1ZeAGbamazs5X6r0wiVDFLymcfYa8IzjL4OXhZ7ZpoE2gF8Dj2WBk_mfLAl1EHBo8t07nhCQlOe9IUJltqdxVO-zCjUayf7yzZ7XRVg");'
          ></div>
          <p class="text-[#0d131c] text-base font-medium leading-normal">Shoes</p>
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-LsQY_PEGPsHZAcO-kpVo3bO51uXGSHWpl0N4dcLWO66VwgJC52kLCypv-RR1TZWsR8ivlNJnYtaVhMvrLS3ut0fBqobQxo6ywAhhokmCU_aeY46PH4RqFXP5iWfq_ms5UvHqpBpAGVTYMWVz8xhNzRWoWq3j8p1PhvSyGTp-0_iePEtG-iWYqUetvAKGWhUyVAlzfdaze44zoFO5q9zq4riPCpi4O9tBllyxpiujXOkP3oppgv9JXZa8P7PcqNJFXaffjeNzo78");'
          ></div>
          <p class="text-[#0d131c] text-base font-medium leading-normal">Bags</p>
        </div>
        <div class="flex flex-col gap-3 pb-3">
          <div
              class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCMaNVd8XAh1Ud8QZhJZ19U9cm4ObiFiAUlN7djLQdNbFdestMbnGvWRQiaR4cgk03g0J9QyMLDJ7uR-ikWDgckofu3snshxEH-kEd8UJJ1lilmb2RY-JeaxobnGxyUIfJpZhzD9FGBDSKjN42XLOYlnlNJSD1sC3ogjzfUuoTRUVDc8FxtOevWfrvCzPVENFFbQPVLHZiBJ4iIsoKsKRfvgMStol4SVbXyvDMyZA6W2-XNALcjRtP_wgnbtC4jph-ILUWp9yMvXuU");'
          ></div>
          <p class="text-[#0d131c] text-base font-medium leading-normal">Jewelry</p>
        </div>
      </div>
      <h2 class="text-[#0d131c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Promotions</h2>
      <div class="p-4 @container">
        <div class="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
              class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCNN-rj6L0Tol1HUB51-NCVvv270HPHDiCzIKbgJLeDWeZn7daWY8uB-d4wbvR9W8INjG4p31i5zebYxyzMXaZ65iY3YYe-g1OWeZGdb5YsiaOoZWK92-iq18ix-WJ6i-K3x9w0AdWFBd8p3DSgy5qhstxZlcrn3I0IxRe7uPXPqcbGq5wAonL_kC7SXo_Gg6337PBrjNjOUXGaOt1I6vm7a9kB8pMaeQBUERjbqmEjcvs2CU2LuFwch8SUuKF82WuXDaNYUE3oHmY");'
          ></div>
          <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p class="text-[#0d131c] text-lg font-bold leading-tight tracking-[-0.015em]">Summer Sale</p>
            <div class="flex items-end gap-3 justify-between">
              <p class="text-[#47699e] text-base font-normal leading-normal">Up to 50% off on selected items. Limited time offer.</p>
              <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#022359] text-[#f8f9fc] text-sm font-medium leading-normal"
              >
                <span class="truncate">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 @container">
        <div class="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-start">
          <div
              class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHAHXe0s77pnXCzRfIJee62rdPEUgQLN5s-qGjEH99jvyxG1PIamafOEv3qykEj4DNElpiO52mJjsNAYZGrGU_UaAOUnhmqwycYx-PNjBS0-72wUQmt70LIS8G-8flGWL_M_q3BdF8k1KltFWEk0qH6t1gYqkk0SBHRD-jybxu_QDm5vG8UWnnOepSlRE1TOtBZst2S02Zwm9YYCWCKP07jfagZxNuntpfj7FV_tofgiuY_cKG0roPeVhWSVVVAvKo0fqiWFScOTo");'
          ></div>
          <div class="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 py-4 @xl:px-4">
            <p class="text-[#0d131c] text-lg font-bold leading-tight tracking-[-0.015em]">New Arrivals</p>
            <div class="flex items-end gap-3 justify-between">
              <p class="text-[#47699e] text-base font-normal leading-normal">Explore the latest additions to our collection.</p>
              <button
                  class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#022359] text-[#f8f9fc] text-sm font-medium leading-normal"
              >
                <span class="truncate">Shop Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
