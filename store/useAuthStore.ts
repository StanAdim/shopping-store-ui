import { defineStore } from 'pinia';

interface User {
    id: number;
    name: string;
    email: string;
}

interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export const useAuthStore = defineStore('auth', {

    state: (): AuthState => ({
        user: null,
        token: null,
        loading: false,
        error: null,
        config : useRuntimeConfig()
    }),

    getters: {
        isAuthenticated: (state) => !!state.token,
        getUser: (state) => state.user,
        getToken: (state) => state.token,
    },

    actions: {
        async login(email: string, password: string) {
            this.loading = true;
            this.error = null;
            try {
                const response = await useApiFetch(`/api/login`, {
                    method: 'POST',
                    body: JSON.stringify({
                        grant_type: 'password',
                        client_id: this.config.public.apiID,
                        client_secret: this.config.public.apiSecret,
                        email: email,
                        password: password,
                        scope: 'api',
                    }),
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || 'Authentication failed');
                }
                this.token = data.access_token;

                // Store token in localStorage for persistence
                localStorage.setItem('auth_token', data.access_token);

                // Fetch user information using the token
                await this.fetchUser();

                return true;
            } catch (error: any) {
                this.error = error.message || 'An error occurred during login';
                return false;
            } finally {
                this.loading = false;
            }
        },
        async fetchUser() {
            if (!this.token) return;

            try {
                const response = await useApiFetch(`/api/user`, {
                    headers: {'Authorization': `Bearer ${this.token}`},
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                this.user = await response.json();
            } catch (error: any) {
                this.error = error.message;
                // If fetching user fails, we should probably log out
                this.logout();
            }
        },
        async logout() {
            if (this.token) {
                try {
                    await useApiFetch(`/api/logout`, {
                        method: 'POST',
                        headers: {'Authorization': `Bearer ${this.token}`},
                    });
                } catch (error) {
                    console.error('Error during logout', error);
                }
            }

            this.user = null;
            this.token = null;
            localStorage.removeItem('auth_token');
        },

        initAuth() {
            const token = localStorage.getItem('auth_token');
            if (token) {
                this.token = token;
                this.fetchUser();
            }
        },
    },
});