@extends('structure')

@section('title', 'Cookies for sale')

@section('content')
    <section class="container">
        <ul>
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>


        {!! @Form::open(array('route' => 'post', 'class' => 'form', 'url' => '/')) !!}
            <div class="form-group col-md-5">
                {!! Form::text('name',null, array("class"=>"form-control")) !!}
            </div>

            <div class="form-group">
                {!! Form::submit('submit', array("class" => "btn btn-primary")) !!}
            </div>
        {!! Form::close() !!}

    </section>




@endsection
