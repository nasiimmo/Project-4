
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Car
from .serializers.common import CarSerializer
from .serializers.populated import PopulatedCarSerializer

# Path: /Cars/
# Methods: GET, POST
class CarListCreateView(ListCreateAPIView):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

# Path: /Cars/:id/
# Methods: GET, PUT, PATCH, DELETE
class CarDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Car.objects.all()

    def get_serializer_class(self):
        print('self request method ->', self.request.method)
        if self.request.method == 'PUT':
            return CarSerializer
        return PopulatedCarSerializer