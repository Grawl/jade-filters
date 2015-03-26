# jade-filters
test some Jade filters with grunt-contrib-jade

Usage:

- `npm i`
- `grunt jade:<filter>`

## Current filters status:

- [x] [CoffeeScript](https://github.com/jashkenas/coffeescript) `:coffee`
- [x] [Stylus](https://github.com/Automattic/stylus) `:styl`
- [ ] [Sass](https://github.com/sass/node-sass) (`node-sass`) `:sass`
- [ ] [Mammouth](https://github.com/btwael/mammouth) `:mammouth`

## Current errors

### Sass

```
>> TypeError: source/sass.jade:4
>>     2| html
>>     3|       body
>>   > 4|               :sass
>>     5|                       #block
>>     6|                               color: red
>> 
>> Cannot convert null to object
```

### Mammouth

Exported is equl to import. No errors.
