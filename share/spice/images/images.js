function ddg_spice_images(apiResult) {

    if (!apiResult || !apiResult.results || !apiResult.results.length) {
        return Spice.failed('images');
    }

    Spice.add({
        id: 'images',
        name: 'Images',

        allowMultipleCalls: true,

        data: apiResult.results,

        meta: {
            next: apiResult.next,
            searchTerm: apiResult.query
        },

        templates: {
            item: 'images_item',
            detail: 'images_detail'
        },

        relevancy: {
            dup: 'image'
        }

    });

}
