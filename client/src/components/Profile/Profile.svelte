<script>
    import { supabase } from '../../supabase/supabaseClient'

    let session;

    async function getSession(){
        const { data, error } = await supabase.auth.getSession()

        //console.log(data, error); // Metadata: Profile picture, username, name, user_id etc

        if (!data?.session){
            window.location.href = "/signin"
        } else if (data?.session){
            session = data?.session;
            console.log('session retrieved')
        }
    }

    async function signOut(){
        try {
            const { error } = await supabase.auth.signOut()
        } catch (error){
            console.log(error)
        } finally {
            window.location.href = "/"
        }
    }

    getSession()
</script>

<h1>Name: {session?.user.user_metadata.name}</h1>
<h1>Email: {session?.user.user_metadata.email}</h1>
<h1>Phone: </h1>
<p></p>
<button on:click={() => signOut()}>Sign Out</button>