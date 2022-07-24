// // Массив с начальными карточками

// const movies = [
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1648693140416-19d84a822450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2061&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1621268640211-6dc56771d7a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1596481874540-695658ac5c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
//     isLiked: [2]
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1563212107-c0cd3b51dc0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1592990055926-fd76438ce50f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1484887603430-371459454eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1589488766611-08aad2021d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1644199795907-995187957066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1555704318-0cff1b92c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//     isLiked: [1]
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1488693161025-5f967b74de89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1648693140416-19d84a822450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2061&q=80',
//     isLiked: []
//   },
//   {
//     title: 'В погоне за Бенкси',
//     duration: '27 минут',
//     link: 'https://images.unsplash.com/photo-1621268640211-6dc56771d7a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
//     isLiked: []
//   }
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1596481874540-695658ac5c0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80',
//   //   isLiked: []
//   // },
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1563212107-c0cd3b51dc0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80',
//   //   isLiked: [4]
//   // },
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1592990055926-fd76438ce50f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   //   isLiked: []
//   // },
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1484887603430-371459454eed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2056&q=80',
//   //   isLiked: []
//   // },
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1589488766611-08aad2021d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
//   //   isLiked: []
//   // },
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1644199795907-995187957066?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   //   isLiked: []
//   // },
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1555704318-0cff1b92c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   //   isLiked: []
//   // },
//   // {
//   //   title: 'В погоне за Бенкси',
//   //   duration: '27 минут',
//   //   link: 'https://images.unsplash.com/photo-1488693161025-5f967b74de89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80',
//   //   isLiked: []
//   // },
// ];

// export default movies;