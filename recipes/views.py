from django.shortcuts import render
from .models import *
from django.views.generic import ListView, DetailView, UpdateView, CreateView,DeleteView, View,TemplateView
# Create your views here.

class RecipeList(TemplateView):
  model = Recipe
  # template_name = 'recipes/recipelll.html'
  template_name = 'frontend/index.html'
  context_object_name = 'recipes_list'
  queryset = Recipe.objects.order_by('-created')    
  def get_context_data(self, **kwargs):

        context = super().get_context_data(**kwargs)
        # вписываем наш фильтр в контекст
        # context['filter'] = PostFilter(
        #     self.request.GET, queryset=self.get_queryset())
        return context