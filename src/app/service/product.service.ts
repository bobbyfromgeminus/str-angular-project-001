import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  list: Product[] = [ {"id":1,"catId":1,"name":"Milk - Chocolate 250 Ml","description":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","image":"/assets/img/products/img01.jpg","price":53.99,"stock":7,"featured":false,"active":true},
                      {"id":2,"catId":1,"name":"Fiddlehead - Frozen","description":"In congue. Etiam justo. Etiam pretium iaculis justo.","image":"/assets/img/products/img02.jpg","price":40.99,"stock":68,"featured":true,"active":true},
                      {"id":3,"catId":1,"name":"Muffin Mix - Blueberry","description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","image":"/assets/img/products/img03.jpg","price":35.99,"stock":70,"featured":false,"active":true},
                      {"id":4,"catId":1,"name":"Cookie Dough - Chunky","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.","image":"/assets/img/products/img04.jpg","price":23.99,"stock":69,"featured":true,"active":false},
                      {"id":5,"catId":1,"name":"Beans - Green","description":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","image":"/assets/img/products/img05.jpg","price":29.99,"stock":89,"featured":false,"active":true},
                      {"id":6,"catId":1,"name":"Garlic","description":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","image":"/assets/img/products/img06.jpg","price":10.99,"stock":20,"featured":true,"active":false},
                      {"id":7,"catId":2,"name":"Artichoke - Fresh","description":"In congue. Etiam justo. Etiam pretium iaculis justo.","image":"/assets/img/products/img07.jpg","price":79.99,"stock":79,"featured":true,"active":true},
                      {"id":8,"catId":2,"name":"Pork - Backfat","description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","image":"/assets/img/products/img08.jpg","price":65.99,"stock":84,"featured":false,"active":true},
                      {"id":9,"catId":2,"name":"Potatoes - Fingerling 4 Oz","description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","image":"/assets/img/products/img09.jpg","price":28.99,"stock":83,"featured":true,"active":true},
                      {"id":10,"catId":1,"name":"Cake Slab","description":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunce.","image":"/assets/img/products/img10.jpg","price":99.99,"stock":86,"featured":true,"active":false},
                      {"id":11,"catId":2,"name":"Chicken - Wings, Tip Off","description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","image":"/assets/img/products/img11.jpg","price":83.99,"stock":47,"featured":true,"active":true},
                      {"id":12,"catId":2,"name":"Caviar - Salmon","description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.","image":"/assets/img/products/img12.jpg","price":88.99,"stock":56,"featured":false,"active":false},
                      {"id":13,"catId":1,"name":"Chutney Sauce - Mango","description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","image":"/assets/img/products/img13.jpg","price":18.99,"stock":52,"featured":true,"active":false},
                      {"id":14,"catId":2,"name":"Quail - Whole, Boneless","description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","image":"/assets/img/products/img14.jpg","price":64.99,"stock":18,"featured":false,"active":true},
                      {"id":15,"catId":2,"name":"Wine - Shiraz Wolf Blass Premium","description":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","image":"/assets/img/products/img15.jpg","price":14.99,"stock":60,"featured":true,"active":false},
                      {"id":16,"catId":1,"name":"Appetizer - Smoked Salmon / Dill","description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.","image":"/assets/img/products/img16.jpg","price":15.99,"stock":46,"featured":true,"active":true},
                      {"id":17,"catId":2,"name":"Pastry - Cherry Danish - Mini","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","image":"/assets/img/products/img17.jpg","price":17.99,"stock":4,"featured":true,"active":true},
                      {"id":18,"catId":2,"name":"Sugar - Brown","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","image":"/assets/img/products/img18.jpg","price":4.99,"stock":3,"featured":false,"active":true},
                      {"id":19,"catId":1,"name":"Bread - Roll, Soft White Round","description":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","image":"/assets/img/products/img19.jpg","price":34.99,"stock":74,"featured":false,"active":false},
                      {"id":20,"catId":1,"name":"Lettuce - Lolla Rosa","description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","image":"/assets/img/products/img20.jpg","price":51.99,"stock":97,"featured":true,"active":true},
                      {"id":21,"catId":2,"name":"Mountain Dew","description":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","image":"/assets/img/products/img21.jpg","price":78.99,"stock":17,"featured":true,"active":false},
                      {"id":22,"catId":2,"name":"Iced Tea - Lemon, 460 Ml","description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","image":"/assets/img/products/img22.jpg","price":91.99,"stock":23,"featured":true,"active":false},
                      {"id":23,"catId":1,"name":"Squeeze Bottle","description":"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.","image":"/assets/img/products/img23.jpg","price":86.99,"stock":26,"featured":false,"active":false},
                      {"id":24,"catId":2,"name":"Vegetable - Base","description":"Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","image":"/assets/img/products/img24.jpg","price":74.99,"stock":33,"featured":false,"active":false},
                      {"id":25,"catId":1,"name":"Wine - Muscadet Sur Lie","description":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","image":"/assets/img/products/img25.jpg","price":93.99,"stock":50,"featured":false,"active":false},
                      {"id":26,"catId":1,"name":"Pail - 4l White, With Handle","description":"In congue. Etiam justo. Etiam pretium iaculis justo.","image":"/assets/img/products/img26.jpg","price":66.99,"stock":23,"featured":false,"active":true},
                      {"id":27,"catId":1,"name":"Lid Tray - 16in Dome","description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","image":"/assets/img/products/img27.jpg","price":15.99,"stock":90,"featured":false,"active":true},
                      {"id":28,"catId":2,"name":"Yams","description":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae feugiat et, eros.","image":"/assets/img/products/img28.jpg","price":76.99,"stock":85,"featured":false,"active":false},
                      {"id":29,"catId":2,"name":"Ham - Virginia","description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","image":"/assets/img/products/img29.jpg","price":35.99,"stock":13,"featured":true,"active":false},
                      {"id":30,"catId":1,"name":"Cake Circle, Paprus","description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","image":"/assets/img/products/img30.jpg","price":56.99,"stock":80,"featured":false,"active":false},
                      {"id":31,"catId":1,"name":"Sauce - Roasted Red Pepper","description":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","image":"/assets/img/products/img31.jpg","price":75.99,"stock":73,"featured":false,"active":false},
                      {"id":32,"catId":1,"name":"Nut - Almond, Blanched, Ground","description":"Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.","image":"/assets/img/products/img32.jpg","price":9.99,"stock":81,"featured":true,"active":true},
                      {"id":33,"catId":2,"name":"Bread - Granary Small Pull","description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.","image":"/assets/img/products/img33.jpg","price":60.99,"stock":1,"featured":false,"active":true},
                      {"id":34,"catId":1,"name":"Wine - Magnotta - Belpaese","description":"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","image":"/assets/img/products/img34.jpg","price":77.99,"stock":4,"featured":true,"active":false},
                      {"id":35,"catId":2,"name":"Bagel - Plain","description":"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.","image":"/assets/img/products/img35.jpg","price":9.99,"stock":59,"featured":true,"active":false},
                      {"id":36,"catId":1,"name":"Sprite, Diet - 355ml","description":"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","image":"/assets/img/products/img36.jpg","price":1.99,"stock":77,"featured":true,"active":true},
                      {"id":37,"catId":1,"name":"Lettuce - Radicchio","description":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","image":"/assets/img/products/img37.jpg","price":37.99,"stock":75,"featured":false,"active":false},
                      {"id":38,"catId":2,"name":"Chinese Foods - Cantonese","description":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","image":"/assets/img/products/img38.jpg","price":51.99,"stock":81,"featured":false,"active":true},
                      {"id":39,"catId":2,"name":"Wine - Rosso Del Veronese Igt","description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","image":"/assets/img/products/img39.jpg","price":3.99,"stock":69,"featured":false,"active":true},
                      {"id":40,"catId":2,"name":"Puree - Passion Fruit","description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","image":"/assets/img/products/img40.jpg","price":77.99,"stock":35,"featured":false,"active":false},
                      {"id":41,"catId":2,"name":"Cod - Salted, Boneless","description":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.","image":"/assets/img/products/img41.jpg","price":68.99,"stock":28,"featured":false,"active":true},
                      {"id":42,"catId":2,"name":"Dawn Professionl Pot And Pan","description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","image":"/assets/img/products/img42.jpg","price":44.99,"stock":28,"featured":true,"active":true},
                      {"id":43,"catId":2,"name":"Bread Base - Goodhearth","description":"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","image":"/assets/img/products/img43.jpg","price":62.99,"stock":34,"featured":true,"active":false},
                      {"id":44,"catId":1,"name":"Veal - Osso Bucco","description":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.","image":"/assets/img/products/img44.jpg","price":4.99,"stock":43,"featured":false,"active":false},
                      {"id":45,"catId":1,"name":"Arizona - Plum Green Tea","description":"Fusce consequat. Nulla nisl. Nunc nisl.","image":"/assets/img/products/img45.jpg","price":51.99,"stock":95,"featured":true,"active":true},
                      {"id":46,"catId":2,"name":"Beef - Tongue, Cooked","description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat.","image":"/assets/img/products/img46.jpg","price":81.99,"stock":69,"featured":true,"active":false},
                      {"id":47,"catId":1,"name":"Coke - Classic, 355 Ml","description":"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.","image":"/assets/img/products/img47.jpg","price":3.99,"stock":53,"featured":false,"active":true},
                      {"id":48,"catId":2,"name":"Wine - Red, Concha Y Toro","description":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","image":"/assets/img/products/img48.jpg","price":62.99,"stock":65,"featured":true,"active":false},
                      {"id":49,"catId":1,"name":"Cheese - Le Cheve Noir","description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue..","image":"/assets/img/products/img49.jpg","price":55.99,"stock":34,"featured":false,"active":false},
                      {"id":50,"catId":2,"name":"Trout Rainbow Whole","description":"Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.","image":"/assets/img/products/img50.jpg","price":11.99,"stock":65,"featured":true,"active":false}];


  constructor() { }


  /*
    ------------- PRODUCT METÓDUSOK -------------

        Mindegyik egy tömböt vár paraméterként,
        ezáltal egymásba is ágyazhatók.
     _____________________________________________
  */

    // A KIEMELT elemeket adja vissza
    getFeaturedItems(sourceArray): Product[] {
      return sourceArray.filter( item => item.featured);
    }

    // Az AKTÍV elemeket adja vissza
    getActiveItems(sourceArray): Product[] {
      return sourceArray.filter( item => item.active);
    }

    // Az INAKTÍV elemeket adja vissza
    getInactiveItems(sourceArray): Product[] {
      return sourceArray.filter( item => !item.active);
    }

    // Az ÖSSZES elemeket adja vissza
    getAllItems(sourceArray): Product[] {
      return sourceArray.filter( item => item);
    }

    // Egy adott KATEGÓRIA elemeit adja vissza
    getCategoryItems(sourceArray, category: number): Product[] {
      return sourceArray.filter( item => item.catId === category);
    }

    // Összekeveri a tömböt
    randomize(sourceArray): Product[] {
      return sourceArray.sort( () => Math.random() - 0.5);
    }

    // Az átadott tulajdonság szerint növekvő sorrendbe rendezi a tömböt
    sortBy(sourceArray, property: string): Product[] {
      return sourceArray.sort( (a, b) => {
        if ( a[property] < b[property] ){
          return -1;
        }
        if ( a[property] > b[property] ){
          return 1;
        }
        return 0;
      });
    }

}