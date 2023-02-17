
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const npm_package_dependencies_moment_timezone: string;
	export const TAURI_TARGET_TRIPLE: string;
	export const npm_package_scripts_tauri: string;
	export const NODE: string;
	export const INIT_CWD: string;
	export const NVM_CD_FLAGS: string;
	export const npm_config_version_git_tag: string;
	export const npm_package_devDependencies_typescript: string;
	export const SHELL: string;
	export const TERM: string;
	export const npm_package_devDependencies_vite: string;
	export const PERL5LIB: string;
	export const npm_config_init_license: string;
	export const npm_package_scripts_dev: string;
	export const PERL_MB_OPT: string;
	export const npm_package_dependencies__tauri_apps_api: string;
	export const SDKMAN_PLATFORM: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_private: string;
	export const npm_package_readmeFilename: string;
	export const NVM_DIR: string;
	export const USER: string;
	export const npm_package_description: string;
	export const npm_package_scripts_check_watch: string;
	export const SUDO_USER: string;
	export const SDKMAN_CANDIDATES_API: string;
	export const SUDO_UID: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const GO111MODULE: string;
	export const npm_package_devDependencies_svelte: string;
	export const TAURI_PLATFORM_TYPE: string;
	export const MAIL: string;
	export const PATH: string;
	export const npm_config_argv: string;
	export const _: string;
	export const PWD: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const npm_package_name: string;
	export const SDKMAN_VERSION: string;
	export const npm_config_version_commit_hooks: string;
	export const npm_package_scripts_build: string;
	export const npm_config_bin_links: string;
	export const TAURI_PLATFORM: string;
	export const npm_config_wrap_output: string;
	export const RBENV_SHELL: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const HOME: string;
	export const SHLVL: string;
	export const SUDO_COMMAND: string;
	export const npm_package_type: string;
	export const GOROOT: string;
	export const npm_config_save_prefix: string;
	export const npm_config_strict_ssl: string;
	export const TAURI_FAMILY: string;
	export const TAURI_PLATFORM_VERSION: string;
	export const npm_config_version_git_message: string;
	export const PERL_LOCAL_LIB_ROOT: string;
	export const KOTLIN_HOME: string;
	export const LOGNAME: string;
	export const MACOSX_DEPLOYMENT_TARGET: string;
	export const YARN_WRAP_OUTPUT: string;
	export const SDKMAN_DIR: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__tauri_apps_cli: string;
	export const CLASSPATH: string;
	export const LC_CTYPE: string;
	export const OPENSSL_DIR: string;
	export const GOPATH: string;
	export const NVM_BIN: string;
	export const TAURI_ARCH: string;
	export const npm_config_ignore_scripts: string;
	export const npm_config_user_agent: string;
	export const npm_config_version_git_sign: string;
	export const SDKMAN_CANDIDATES_DIR: string;
	export const SUDO_GID: string;
	export const npm_config_ignore_optional: string;
	export const npm_config_init_version: string;
	export const TAURI_DEBUG: string;
	export const PERL_MM_OPT: string;
	export const npm_package_scripts_check: string;
	export const npm_config_version_tag_prefix: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {

}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		npm_package_dependencies_moment_timezone: string;
		TAURI_TARGET_TRIPLE: string;
		npm_package_scripts_tauri: string;
		NODE: string;
		INIT_CWD: string;
		NVM_CD_FLAGS: string;
		npm_config_version_git_tag: string;
		npm_package_devDependencies_typescript: string;
		SHELL: string;
		TERM: string;
		npm_package_devDependencies_vite: string;
		PERL5LIB: string;
		npm_config_init_license: string;
		npm_package_scripts_dev: string;
		PERL_MB_OPT: string;
		npm_package_dependencies__tauri_apps_api: string;
		SDKMAN_PLATFORM: string;
		npm_config_registry: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_private: string;
		npm_package_readmeFilename: string;
		NVM_DIR: string;
		USER: string;
		npm_package_description: string;
		npm_package_scripts_check_watch: string;
		SUDO_USER: string;
		SDKMAN_CANDIDATES_API: string;
		SUDO_UID: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		GO111MODULE: string;
		npm_package_devDependencies_svelte: string;
		TAURI_PLATFORM_TYPE: string;
		MAIL: string;
		PATH: string;
		npm_config_argv: string;
		_: string;
		PWD: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		npm_package_name: string;
		SDKMAN_VERSION: string;
		npm_config_version_commit_hooks: string;
		npm_package_scripts_build: string;
		npm_config_bin_links: string;
		TAURI_PLATFORM: string;
		npm_config_wrap_output: string;
		RBENV_SHELL: string;
		npm_package_version: string;
		npm_package_devDependencies_svelte_check: string;
		HOME: string;
		SHLVL: string;
		SUDO_COMMAND: string;
		npm_package_type: string;
		GOROOT: string;
		npm_config_save_prefix: string;
		npm_config_strict_ssl: string;
		TAURI_FAMILY: string;
		TAURI_PLATFORM_VERSION: string;
		npm_config_version_git_message: string;
		PERL_LOCAL_LIB_ROOT: string;
		KOTLIN_HOME: string;
		LOGNAME: string;
		MACOSX_DEPLOYMENT_TARGET: string;
		YARN_WRAP_OUTPUT: string;
		SDKMAN_DIR: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__tauri_apps_cli: string;
		CLASSPATH: string;
		LC_CTYPE: string;
		OPENSSL_DIR: string;
		GOPATH: string;
		NVM_BIN: string;
		TAURI_ARCH: string;
		npm_config_ignore_scripts: string;
		npm_config_user_agent: string;
		npm_config_version_git_sign: string;
		SDKMAN_CANDIDATES_DIR: string;
		SUDO_GID: string;
		npm_config_ignore_optional: string;
		npm_config_init_version: string;
		TAURI_DEBUG: string;
		PERL_MM_OPT: string;
		npm_package_scripts_check: string;
		npm_config_version_tag_prefix: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
