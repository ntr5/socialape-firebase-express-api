let db = {
    users: [
        {
            userID: 'userID',
            email: 'user@email.com',
            handle: 'user',
            createAt: '2020-05-05T03:35:29.886Z',
            imageUrl: 'image/dsadsfdsaffasdf/asdfdasfasd',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, UK'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is simple scream',
            createdAt: '2020-05-05T03:35:29.886Z',
            likeCount: 5,
            commentCount: 3
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'asdfasdfahasdflkhlkjh',
            body: 'nice one mate!',
            createdAt: '2020-05-05T03:35:29.886Z'
        }
    ],
    notification: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'asdfasdfahasdflkhlkjh',
            type: 'like | comment',
            createdAt: '2020-05-05T03:35:29.886Z'
        }
    ]
}

const userDetails = {
    // Redux data
    credentials: {
        userId: 'SSL989LJNK9989HAFPOPO09823350',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2020-05-05T03:35:29.886Z',
        imageUrl: 'image/dafdadsfasdfasdf/asdfasdf',
        bio: 'Hello, my name is user, nice to meet you',
        website: 'https://user.com',
        location: 'London, Uk'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'a09sd87f90sad87f0987dsf90'
        },
        {
            userHandle: 'user',
            screamId: '9a870sdf9087asd90fasdadsf'
        }
    ]
}