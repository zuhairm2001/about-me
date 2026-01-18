package handlers

import (
	"html/template"
	"net/http"
)

var indexTmpl = template.Must(template.ParseFiles("templates/index.html"))


func IndexHandler(w http.ResponseWriter, r *http.Request) {
	indexTmpl.Execute(w, nil)
}


