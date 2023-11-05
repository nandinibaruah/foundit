<script>
    import { supabase } from '../../supabase/supabaseClient'

    console.log(supabase)

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

    async function signOut(){
        try {
            loading = true

            const { error } = await supabase.auth.signOut()
        } catch (error){
            console.log(error)
        } finally {
            loading = false;
        }
    }

    async function getSession(){
        const { data, error } = await supabase.auth.getSession()

        console.log(data, error); // Metadata: Profile picture, username, name, user_id etc
    }


</script>

<button on:click={() => signIn()}>Sign In with Google</button>
<p></p>
<button on:click={() => signOut()}>Sign Out</button>