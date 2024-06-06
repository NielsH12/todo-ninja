import {ref} from 'vue'



export function useLocale() {
    const my_locale = ref("en")

    function update(new_value)
    {
        my_locale.value = new_value
    }
    return {my_locale}
}