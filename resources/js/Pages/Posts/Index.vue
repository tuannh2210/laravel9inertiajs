<template>
    <AppLayout>
        <table class="table">
            <thead>
                <tr>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                        >
                            <custom-button label="111" />
                        </span>
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >Title</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >Content</span
                        >
                    </th>
                    <th class="px-6 py-3 bg-gray-50 text-left">
                        <span
                            class="text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            >Created at</span
                        >
                    </th>
                </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200 divide-solid">
                <tr v-for="post in posts['data']">
                    <td
                        class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                    >
                        {{ post.id }}
                    </td>
                    <td
                        class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                    >
                        {{ post.title }}
                    </td>
                    <td
                        class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                    >
                        {{ post.content }}
                    </td>
                    <td
                        class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
                    >
                        {{ post.created_at }}
                    </td>
                </tr>
            </tbody>
        </table>
    </AppLayout>
</template>

<script>
export default {
    props: {
        posts: Object,
    },
};
</script>
