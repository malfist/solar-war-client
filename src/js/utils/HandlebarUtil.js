Handlebars.registerHelper("toProperCase", function(item) {
  return item.toProperCase();
});
Handlebars.registerHelper('if_eq', function(a, b, opts) {
  if(a == b) // Or === depending on your needs
    return opts.fn(this);
  else
    return opts.inverse(this);
});