<!-- pages/dashboard.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-xl font-bold">My App</h1>
            </div>
          </div>
          <div class="flex items-center">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="ml-3 relative">
                <div class="flex items-center">
                  <span class="mr-4">Welcome, {{ authStore.user?.name }}</span>
                  <button @click="handleLogout"
                          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 p-4">
            <h2 class="text-2xl font-bold mb-4">Dashboard Content</h2>
            <p>This is a protected page that only authenticated users can access.</p>

            <div class="mt-4">
              <h3 class="text-lg font-medium mb-2">Your Profile Information:</h3>
              <div v-if="authStore.user" class="bg-white p-4 rounded shadow">
                <p><strong>ID:</strong> {{ authStore.user.id }}</p>
                <p><strong>Name:</strong> {{ authStore.user.name }}</p>
                <p><strong>Email:</strong> {{ authStore.user.email }}</p>
              </div>
              <div v-else class="bg-yellow-50 p-4 rounded shadow">
                Loading user data...
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

// Define middleware to protect this route
definePageMeta({
  middleware: ['auth']
});

const router = useRouter();
const authStore = useAuthStore();

const handleLogout = async () => {
  await authStore.logout();
  router.push('/login');
};
</script>