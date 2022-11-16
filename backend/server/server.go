package server

func Run() {
	r := setupRouter()

	r.Run()
}
