export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
                hotspot: true, // Also called image crop. So, whenever we use some kind of software, always look through the documentation.
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
}