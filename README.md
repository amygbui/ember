# FuturesMedia Coding Challenge

The purpose of this coding challenge is to build a simple CRUD app using Ember. Instead of having a back-end, local storage is used to mock the database. This app is also styled using Bootstrap Sass.

## Running / Development

* CD into the app directory and type `ember serve` into the command line
* Visit the app at [http://localhost:4200](http://localhost:4200).

## Features and Implementation

This app is a song app containing Labels, Artists, Albums, and Songs. Users are able to add, edit, and delete Labels, Artists, Albums, and Songs. Users are also able to go to each model's show page and see its relevant details.

### Labels
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
name            | string    | not null

Labels can have many artists, and by extension, many albums and songs.

### Artists
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
name            | string    | not null

Artists can belong to one label, and can have many albums. By extension, they can have many songs through the albums.

### Albums
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
title           | string    | not null

Albums can belong to one artist, and by extension, only one label. They can have many songs.

### Songs
Column          | Data Type | Details
--------------- | --------- | -------
id              | integer   | not null, primary key
title           | string    | not null

A song can belong to one album. By extension, a song can thus belong to one artist and one album.
