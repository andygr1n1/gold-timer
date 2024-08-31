#Packages:
    --Notifications:
        --- react-hot-toast (https://www.npmjs.com/package/react-hot-toast)

Debug:

1. I can't run yarn dev because of some variables are not available.
   You should declare them on system level, or hardcode them in package.json and remove these variables.

Solution:

```
    echo $VITE_TIPTAP_PRO_TOKEN
    export VITE_TIPTAP_PRO_TOKEN=your_actual_token_value
    yarn dev
```
