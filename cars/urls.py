from django.urls import path
from .views import CarListCreateView, CarDetailView

# Every request that hits this router file will start with /cars/
urlpatterns = [
    path('', CarListCreateView.as_view()), # this path is /cars/
    path('<int:pk>/', CarDetailView.as_view()) # this path is /cars/:id/
]