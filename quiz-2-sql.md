# Quiz 2 - SQL

Rule:

1. Tulis setiap sql query pada setiap soal, di bawah ini.
2. Screenshot hasil dari sql query tadi.
3. **sql query** tadi bisa dijadikan jadi satu file, baik notepad, word document, .md (markdown) atau apapun itu.
4. Lalu Upload hasil file **sql query** tadi, beserta dengan screenshot hasil query nya, di github.

---

### 1. Buat sebuah database dengan nama **book_store**

<!-- answer: -->

- create database book_store;

### 2. Pada database tersebut, buat sebuah table nama **books** dengan struktur dibawah ini.

| column     | type         | Option                |
| ---------- | ------------ | --------------------- |
| id         | biginteger   | BIGSERIAL PRIMARY KEY |
| name       | varchar(100) | not null              |
| author     | varchar(50)  | not null              |
| price      | integer      | not null              |
| is_publish | boolean      | default value false   |

<!-- answer: -->

- \c book_store;
- create table books (
  id bigserial primary key,
  name varchar(100) not null,
  author varchar(50) not null,
  price integer not null,
  is_publish boolean default false
  );

### 3. Masukan data seperti di bawah

| name                     | author             | price  | is_publish |
| ------------------------ | ------------------ | ------ | ---------- |
| The Intelligent Investor | Benjamin Graham    | 175500 | true       |
| Segala Galanya Amyar     | Mark Manson        | 111000 | false      |
| Rich Dad Poor Dad        | Robert T. Kiyosaki | 54400  | false      |
| Novel Bulan              | Tere Liye          | 76000  | true       |
| You Do You               | Fellexandro Ruby   | 102400 | true       |
| Start with Why           | Simon Sinek        | 80000  | false      |

<!-- answer -->

insert into books (
name,
author,
price,
is_publish
) values (
'The Intelligent Investor',
'Benjamin Graham',
'175500',
'true'
),
(
'Segala Galanya Ambyar',
'Mark Manson',
'111000',
'false'
),
(
'Rich Dad Poor Dad',
'Robert T. Kiyosaki',
'54400',
'false'
),
(
'Novel Bulan',
'Tere Liye',
'76000',
'true'
),
(
'You Do You',
'Fellexandro Ruby',
'102400',
'true'
),
(
'Start with Why',
'Simon Sinek',
'80000',
'false'
);

### 4. Tampilkan hanya column atau field **name, author, price** dari table books;

<!-- answer -->

select name, author, price from books;

### 5. Tampilkan data dari tabel book, dimana harga/price buku tersebut lebih dari sama dengan 80000.

<!-- answer -->

select \* from books where price >= 80000;

### 6. Tampilkan data dari tabel book, dimana nama/name buku tersebut mengandung kata kata "Rich" pada kata di bagian depan.

<!-- answer -->

select \* from books where name like 'Rich%';

### 7. Update data pada tabel **books**. Di update **price** nya menjadi **180000** dan **is_publish** nya menjadi true. Yang mana data tersebut memiliki **author** adalah "Simon Sinek".

<!-- answer -->

update books
set price = 180000,
is_publish = true
where author = 'Simon Sinek';

### 8. Hapus data pada table **books**, dimana book **name** nya adalah "Novel Bulan"

<!-- answer -->

delete from books where name = 'Novel Bulan';

### 9. Tampilkan data dari tabel book, dengan urutan harga yang paling mahal terlebih dahulu ke yang paling murah.

<!-- answer -->

select \* from books order by price DESC;
