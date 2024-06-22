import { StyledButton } from '../buttons/StyledButton'
import { IconGoogle } from '@/assets/icons/IconGoogle'

import { useGoogleKzenLogin } from './hooks/useGoogleKzenLogin'

export const GoogleLogin = () => {
    const { googleLogin } = useGoogleKzenLogin()

    return (
        <StyledButton
            variant='outlined'
            onClick={() => googleLogin()}
            startIcon={<IconGoogle className='text-rose-500' />}
        >
            Sign in with Google
        </StyledButton>
    )
}

// curl "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=ya29.a0AXooCgu9tfBN4cFDJO00YmtqUTwkub7QeyBM5IRobGhTOy3kXzW_XsJHXULdndXXrHopAOoO9F_wVylmxgtdfADRYEGmF_qof-RLfWO449zw0ccRKLnIPQhh0HIKs0WoAPjerhk-E593JeD_zrWpRpb-ImqutNiHLwaCgYKASgSARMSFQHGX2Mikp0hinIQpXX0KQbePduFIg0169"
