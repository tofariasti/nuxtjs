const logado = true;

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('auth middleware')
    if( to.path !== '/login' && !logado ){
        return navigateTo('/login');
    }else{
        return;
    }
});