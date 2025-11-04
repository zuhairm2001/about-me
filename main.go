package main

import (
	"log"
	"net/http"

	"github.com/zuhairm2001/about-me/internal/handlers"
)

func main() {
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	http.HandleFunc("/", handlers.IndexHandler)

	log.Println("Server running at port 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))

}
