Reproduction repository for Auth.js VK provider [issue](https://github.com/nextauthjs/next-auth/issues/11633).

### Provider type

VK

### Environment

```
  System:
    OS: Windows 10 10.0.19045
    CPU: (12) x64 AMD Ryzen 5 2600 Six-Core Processor
    Memory: 5.75 GB / 15.93 GB
  Binaries:
    Node: 20.11.0 - C:\Program Files\nodejs\node.EXE
    npm: 10.2.4 - C:\Program Files\nodejs\npm.CMD
    pnpm: 8.15.6 - C:\Program Files\nodejs\pnpm.CMD
  Browsers:
    Edge: Spartan (44.19041.3570.0), Chromium (127.0.2651.74)
    Internet Explorer: 11.0.19041.3570
  npmPackages:
    @auth/prisma-adapter: ^2.4.2 => 2.4.2
    next: 14.2.5 => 14.2.5
    next-auth: ^5.0.0-beta.20 => 5.0.0-beta.20
    react: ^18 => 18.3.1
```

### How to reproduce

- Clone the repository and run `npm install`
- Create and setup vk app [https://id.vk.com/about/business/go](https://id.vk.com/about/business/go)
- Create .env file from .env.example
- Fill `AUTH_VK_ID, AUTH_VK_SECRET` variables from created vk app
- Run docker db container `npm run db`
- Push db schema `npx prisma db push`
- Run dev app `npm run dev`
- Go to localhost and click the button "SignIn"

### Describe the issue

When trying to sign in through a VK provider, an error is displayed
`{"error":"invalid_request","error_description":"Code challenge method is unsupported"}`

### Expected behavior

Normal sign in flow without this error.
