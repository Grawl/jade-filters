# jade-filters
test some Jade filters with grunt-contrib-jade

Usage:

- `npm i`
- `grunt jade:<filter>`

## Current filters status:

- [x] CoffeeScript `:coffee`
- [x] Stylus `:styl`
- [ ] Sass `:sass`
- [ ] Mammouth `:mammouth`

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

```
>> TypeError: source/mammouth.jade:4
>>     2| html
>>     3|       body
>>   > 4|               :mammouth
>>     5|                       list = [1, 2, 3]
>> 
>> Object #<Object> has no method 'compile'
```