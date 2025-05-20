// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    // Initialize auth state from localStorage on page load
    if (!authStore.isAuthenticated) {
        authStore.initAuth();
    }

    // If still not authenticated after initialization, redirect to login
    if (!authStore.isAuthenticated && to.path !== '/login') {
        return navigateTo('/login');
    }

    // If authenticated and trying to access login page, redirect to dashboard
    if (authStore.isAuthenticated && to.path === '/login') {
        return navigateTo('/dashboard');
    }
});