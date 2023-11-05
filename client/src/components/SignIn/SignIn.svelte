<script>
    import { supabase } from '../../supabase/supabaseClient'

    let loading = false
    let jwt = undefined

    async function signIn() {
        try {
            loading = true

            const { data, error } = await supabase.auth.signInWithOAuth({
	            provider: 'google',
	        })

            console.log(data, error);

            if (data){
                console.log('session')
            }
        } catch (error){
            console.log(error)
        } finally {
            loading = false;
        }
    }
</script>

<button on:click={() => signIn()}>Sign In with Google</button>