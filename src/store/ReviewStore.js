import { makeAutoObservable } from "mobx";

export default class ReviewStore {
    constructor() {
        this._reviewsText = [
            {
            id: 1,
            name: "Анатолий Цой",
            email: "Eliseo@gardner.biz",
            city: "Владивосток",
            rating: 5,
            date: 1677841476761,
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
          },
          {
            id: 2,
            name: "Анатолий Цой",
            email: "Jayne_Kuhic@sydney.com",
            city: "Владивосток",
            rating: 3,
            date: 1677841476761,
            body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
          },
          {
            id: 3,
            name: "Анатолий Цой",
            email: "Nikita@garfield.biz",
            city: "Владивосток",
            rating: 4,
            date: 1677841476761,
            body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
          },
          {
            id: 4,
            name: "Анатолий Цой",
            email: "Lew@alysha.tv",
            city: "Владивосток",
            rating: 5,
            date: 1677841476761,
            body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
          },
          {
            id: 5,
            name: "Анатолий Цой",
            email: "Hayden@althea.biz",
            city: "Владивосток",
            rating: 4,
            date: 1677841476761,
            body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
          },
          {
            id: 6,
            name: "Анатолий Цой",
            email: "Presley.Mueller@myrl.com",
            city: "Владивосток",
            rating: 3,
            date: 1677841476761,
            body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
          },
          {
            id: 7,
            name: "Анатолий Цой",
            email: "Dallas@ole.me",
            city: "Владивосток",
            rating: 4,
            date: 1677841476761,
            body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
          },
          {
            id: 8,
            name: "Анатолий Цой",
            email: "Mallory_Kunze@marie.org",
            city: "Владивосток",
            rating: 4,
            date: 1677841476761,
            body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
          },
          {
            id: 9,
            name: "Анатолий Цой",
            email: "Meghan_Littel@rene.us",
            city: "Владивосток",
            rating: 3,
            date: 1677841476761,
            body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
          },
          {
            id: 10,
            name: "Анатолий Цой",
            email: "Carmen_Keeling@caroline.name",
            city: "Владивосток",
            rating: 5,
            date: 1677841476761,
            body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
          },
        ]
        this._reviewsPhoto = [
            {
              id: 1,
               name: "id labore ex et quam laborum",
               email: "Eliseo@gardner.biz",
               img: "https://via.placeholder.com/600/92c952", 
               body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
                id: 2,
                name: "quo vero reiciendis velit similique earum",
                email: "Jayne_Kuhic@sydney.com",
                img: "https://via.placeholder.com/600/92c952",
                body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
                id: 3,
                name: "odio adipisci rerum aut animi",
                email: "Nikita@garfield.biz",
                img: "https://via.placeholder.com/600/771796",
                body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },
            {
                id: 4,
                name: "alias odio sit",
                email: "Lew@alysha.tv",
                img: "https://via.placeholder.com/600/771796",
                body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
            },
            {
                id: 5,
                name: "vero eaque aliquid doloribus et culpa",
                email: "Hayden@althea.biz",
                img: "https://via.placeholder.com/600/24f355",
                body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
              },
              {
                id: 6,
                name: "et fugit eligendi deleniti quidem qui sint nihil autem",
                email: "Presley.Mueller@myrl.com",
                img: "https://via.placeholder.com/600/24f355",
                body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
              },
              {
                id: 7,
                name: "repellat consequatur praesentium vel minus molestias voluptatum",
                email: "Dallas@ole.me",
                img: "https://via.placeholder.com/600/d32776",
                body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
              },
              {
                id: 8,
                name: "et omnis dolorem",
                email: "Mallory_Kunze@marie.org",
                img: "https://via.placeholder.com/600/d32776",
                body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
              },
              {
                id: 9,
                name: "provident id voluptas",
                email: "Meghan_Littel@rene.us",
                img: "https://via.placeholder.com/600/d32776",
                body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
              },
              {
                id: 10,
                name: "eaque et deleniti atque tenetur ut quo ut",
                email: "Carmen_Keeling@caroline.name",
                img: "https://via.placeholder.com/600/d32776",
                body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
              },
        ]
        makeAutoObservable(this)
    }

    setReviewsText(reviews) {
        this._reviewsText = reviews
    }
    setReviewsPhoto(reviews) {
        this._reviewsPhoto = reviews
    }
    get reviewsText() {
        return this._reviewsText
    }
    get reviewsPhoto() {
        return this._reviewsPhoto
    }
}