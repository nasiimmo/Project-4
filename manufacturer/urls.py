from django.urls import path
from .views import ManufacturerListCreateView, ManufacturerDetailView

urlpatterns = [
    path('', ManufacturerListCreateView.as_view()),
    path('<int:pk>/', ManufacturerDetailView.as_view())
]
