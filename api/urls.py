from django.urls import path
from . import views
from rest_framework.schemas import get_schema_view
from django.views.generic import TemplateView

urlpatterns = [
    # path('', views.getData),
    # path('add/', views.addRecipe),
    path('schema/',  get_schema_view(title='API Schema', description='API for recipes'), name='api_schema'),
    path('', views.RecipeListCreate.as_view()),
    path('docs/', TemplateView.as_view(
        template_name='docs.html',
        extra_context={'schema_url':'api_schema'}
        ), name='swagger-ui'),
]