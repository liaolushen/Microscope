Template.post-item.helpers {
  domain: ->
    a = document.create-element 'a'
    a.href = @url
    a.hostname
}