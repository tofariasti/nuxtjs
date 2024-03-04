export default defineNuxtRouteMiddleware((to, from) => {
    console.log('videos middleware')
    const paramValue = +to.params.id;
    if( isNaN(paramValue) || paramValue < 0){
        return navigateTo('/');
    }else{
        return;
    }
});